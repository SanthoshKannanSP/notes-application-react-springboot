FROM node:lts AS development

# Define build arguments for environment variables
ARG VITE_APP_BACKEND_HOST

# Set environment variables during the build process
ENV VITE_APP_BACKEND_HOST=$VITE_APP_BACKEND_HOST

WORKDIR /frontend
COPY package.json /frontend/package.json
COPY package-lock.json /frontend/package-lock.json
COPY tsconfig.json /frontend/tsconfig.json
COPY index.html /frontend/index.html
COPY tsconfig.node.json /frontend/tsconfig.node.json
COPY vite.config.ts /frontend/vite.config.ts

RUN npm ci
COPY ./public /frontend/public
COPY ./src /frontend/src

ENV CI=true
ENV PORT=5173

CMD [ "npm", "run", "dev" ]