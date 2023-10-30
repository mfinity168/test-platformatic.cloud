module.exports = async function (fastify, opts) {
  fastify.get("/example", async (request, reply) => {
    return { hello: fastify.example };
  });

  fastify.get("/version", async (request, reply) => {
    return { build_version: 100 };
  });
};
