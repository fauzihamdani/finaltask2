const { Transaction } = require('../models/');

exports.updatedDateTransactions = async () => {
   console.log('halo');
   try {
      console.log('halo1');
      const transactions = await Transaction.findAll();
      console.log(JSON.stringify(transactions));
      console.log('halo2');
      var lastLoginDate = Date.now();
      const ids = [];
      transactions.map((transaction) => ids.push(transaction.id));
      console.log(ids);

      await Transaction.update(
         { lastLoginDate: lastLoginDate },
         {
            where: {
               id: ids,
            },
         }
      );

      // calculation remaining days
      const daysRemain = (startDate, dueDate) => {
         const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
         const firstDate = new Date(startDate);
         const secondDate = new Date(dueDate);
         const diffDays = Math.round((secondDate - firstDate) / oneDay);
         return diffDays < 0 ? 0 : diffDays;
      };

      transactions.map(async (transaction) => {
         const resultDaysremain = daysRemain(
            transaction.lastLoginDate,
            transaction.dueDate
         );

         if (resultDaysremain === 8) {
            await Transaction.update(
               { payment_status: 'Cancel' },
               {
                  where: {
                     id: transaction.id,
                  },
               }
            );
         }
      });

      console.log(lastLoginDate.toString());
      return console.log('halo');
   } catch (error) {}
};
