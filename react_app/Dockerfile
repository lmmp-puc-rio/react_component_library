# Development Stage
FROM node:16.17.0-bullseye-slim as development

# Args
ARG UID
ARG GID

ARG APP_PORT
ARG REACT_APP_API_SQL
ARG REACT_APP_API_MONGO

ENV APP_PORT ${APP_PORT}
ENV REACT_APP_API_SQL ${REACT_APP_API_SQL}
ENV REACT_APP_API_MONGO ${REACT_APP_API_MONGO}

# Get the node USER to match the host user credentials
RUN groupmod -g $GID node && usermod -u $UID node

# Sets work directory
WORKDIR /usr/local/i3d/app_component_library/

# Create dir strutcture to be used and set ownership
RUN install -d -m 0755 -o 1000 -g 1000 /var/tmp/files/imp
RUN install -d -m 0755 -o 1000 -g 1000 /var/tmp/files/exp

# Set pre-configured node user from node image
#USER node
# Run entrypoint. Needed for development environment
ENTRYPOINT if [ ! -d node_modules ]; then npm install; fi && npm run start