module.exports = async function (fastify, opts) {
  fastify.get("/example", async (request, reply) => {
    return { hello: fastify.example };
  });

  fastify.get("/version", async (request, reply) => {
    return { build_version: 100 };
  });

  fastify.get("/categories", async (request, reply) => {
    reply.send({
      categories: [
        {
          id: "1",
          cate_title: "ทั้งหมด",
        },
        {
          id: "2",
          cate_title: "เว็บไซต์",
        },
        {
          id: "3",
          cate_title: "ผู้ใช้บริการ",
        },
        {
          id: "4",
          cate_title: "เจ้าหน้าที่",
        },
        {
          id: "5",
          cate_title: "Social",
        },
      ],
      users: {
        id: 12345,
        username: "myuser",
      },
    });
    // reply.send([
    //   {
    //     id: "1",
    //     cate_title: "ทั้งหมด",
    //   },
    //   {
    //     id: "2",
    //     cate_title: "เว็บไซต์",
    //   },
    //   {
    //     id: "3",
    //     cate_title: "ผู้ใช้บริการ",
    //   },
    //   {
    //     id: "4",
    //     cate_title: "เจ้าหน้าที่",
    //   },
    //   {
    //     id: "5",
    //     cate_title: "Social",
    //   },
    // ]);
  });
};
