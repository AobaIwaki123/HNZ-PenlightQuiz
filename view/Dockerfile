FROM node:18-bookworm-slim AS base

# Install dependencies
FROM base AS deps

WORKDIR /view

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Development image
FROM base AS runner
WORKDIR /view

RUN apt-get update -y && apt-get install -y openssl

ENV NODE_ENV development

ENV NEXT_TELEMENTRY_DISABLED 1

COPY --from=deps /view/node_modules ./node_modules
COPY . .

EXPOSE 3031

ENV PORT 3031

CMD HOSTNAME="0.0.0.0" PORT=3031 yarn run dev
