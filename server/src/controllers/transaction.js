const { User, Transaction } = require('../../models/');

exports.addTransaction = async (req, res) => {
   try {
      // Check if isAdmin-=-=-=-=-=-=-=-
      // const { id } = req.user;
      // console.log(id);
      // const validateAdmin = await User.findOne({ where: { id: id } });

      // if (validateAdmin.isAdmin === false) {
      //    return res.send({
      //       status: 'failed',
      //       message: 'You have no authorization to do this',
      //    });
      // }
      // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
      //
      //
      // prepared some variable / value in order to save data into transaction table
      const { body } = req;
      console.log('response body', body);
      var startDate = new Date();
      var dueDate = new Date();
      dueDate = dueDate.setDate(dueDate.getDate() + 30);
      // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
      //
      //
      // check if the userid is exist in user table-=-=--=-=-
      const checkIsUserExist = await User.findOne({
         where: { id: req.body.userId },
      });

      if (!checkIsUserExist) {
         return res.send({
            status: 'failed',
            message: 'Id doesnt exist',
         });
      }
      // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
      //
      //
      // check if the userid is exist in tansaction table-=-=--=-=-
      const checkTransaction = await Transaction.findOne({
         where: { userId: req.body.userId },
      });
      if (checkTransaction) {
         return res.send({
            status: 'failed',
            message: 'User Already registered as a premium user',
         });
      }
      // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
      //
      //
      // create data into Transaction Table=-=-=-=-=-
      const transaction = await Transaction.create({
         attachment: req.body.attachment,
         startDate: startDate,
         dueDate: dueDate,
         user_status: req.body.user_status,
         payment_status: req.body.payment_status,
         action: req.body.action,
         userId: req.body.userId,
      });
      // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
      //
      //
      res.send({
         status: 'success',
         data: {
            transaction: transaction,
         },
      });
   } catch (error) {
      console.log(error);
   }
};

exports.getTransactions = async (req, res) => {
   try {
      const { id } = req.user;
      console.log(id);
      const validateAdmin = await User.findOne({ where: { id: id } });

      if (validateAdmin.isAdmin === false) {
         return res.send({
            status: 'failed',
            message: 'You have no authorization to do this',
         });
      }

      const transactions = await Transaction.findAll();

      // calculation remaining days
      const daysRemain = (startDate, dueDate) => {
         const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
         const firstDate = new Date(startDate);
         const seconDate = new Date(dueDate);
         const diffDays = Math.round(
            Math.abs((firstDate - seconDate) / oneDay)
         );
         return diffDays;
      };

      const transactionsFinal = transactions.map((transaction) => ({
         id: transaction.id,
         attachment: transaction.attachment,
         startDate: transaction.startDate,
         dueDate: transaction.dueDate,
         user_status: transaction.user_status,
         payment_status: transaction.payment_status,
         action: transaction.action,
         userId: transaction.userId,
         daysRemaining: daysRemain(transaction.startDate, transaction.dueDate),
      }));
      res.send({
         status: 'success',
         data: {
            transaction: transactionsFinal,
         },
      });
   } catch (error) {}
};

exports.updateTransaction = async (req, res) => {
   const { id } = req.user;
   console.log(id);
   const validateAdmin = await User.findOne({ where: { id: id } });

   if (validateAdmin.isAdmin === false) {
      return res.send({
         status: 'failed',
         message: 'You have no authorization to do this',
      });
   }
   try {
      const updatedUser = await Transaction.update(body, {
         where: {
            id: req.body.id,
         },
      });

      const findUpdatedUser = await User.findOne({
         where: { id: updatedUser },
         attributes: { exclude: ['password'] },
      });

      res.send({
         status: 'success',
         message: 'User Succesfully updated',
         data: {
            findUpdatedUser,
         },
      });
   } catch (err) {
      console.log(err);
      res.status(500).send({
         status: 'error',
         message: 'Server Error',
      });
   }
};
