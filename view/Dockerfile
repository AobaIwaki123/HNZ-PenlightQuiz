FROM node:18-bookworm-slim AS base

# Install dependencies
FROM base AS deps

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Development image
FROM base AS runner
WORKDIR /app

COPY . .

COPY --from=deps /app/node_modules ./node_modules

ENV NODE_ENV development

ENV NEXT_TELEMENTRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

EXPOSE 3030

ENV PORT 3030

CMD HOSTNAME="0.0.0.0" PORT=3030 yarn run dev
