# stage2: build the app
FROM node:lts-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN npm ci && npm run build && npm prune --production

# stage3: start the app
FROM node:lts-alpine AS runner
WORKDIR /app
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/i18n.js ./i18n.js
COPY --from=builder /app/src/ ./src
USER nextjs

EXPOSE 3000

CMD ["npm", "run", "start"]
