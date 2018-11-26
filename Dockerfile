FROM ranjayzheng/dev
COPY . /home/ranjay/koa-demo
WORKDIR /home/ranjay/koa-demo
ENV PATH /home/ranjay/node/bin:$PATH
RUN npm install -S
EXPOSE 3000