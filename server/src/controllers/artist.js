const { Artist } = require('../../models/');

exports.addArtist = async (req, res) => {
   try {
      const { body } = req;
      console.log('response body', body);
      //   const idUser = req.user.id;
      // console.log(idUser);

      // if (!req.files.image)
      //     return res.status(400).send({
      //         status: "fail",
      //         message: "image not found",
      //     });

      // const getLikesCount = await Like.findAll({
      //     where:
      // })

      const artist = await Artist.create({
         name: req.body.name,
         old: req.body.old,
         type: req.body.type,
         startcareer: req.body.startCareer,
      });

      //   const getLike = await Like.findAll({
      //      where: { idPost: feed.id },
      //   });

      //   const savedArtist = await artist.findOne({
      //      where: { id: artist.id },
      //   });

      res.send({
         status: 'success',
         data: {
            artist: artist,
         },
      });
   } catch (error) {
      console.log(error);
   }
};
