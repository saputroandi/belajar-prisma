const {
  PrismaClientValidationError,
  PrismaClientKnownRequestError,
} = require('@prisma/client/runtime');

const errorHandler = (res, next, error) => {
  if (error && error instanceof PrismaClientValidationError) {
    let err = error.message.split('\n');
    err.pop();

    let newArr = err.map((val, idx) => {
      let newVal = val.split(' ');
      return newVal[1] + ' tidak boleh kosong.';
    });

    return res.status(400).json({
      error: true,
      message: newArr,
      nativeErrorMessage: error.message,
    });
  }
  return next(error);
};

module.exports = { errorHandler };
