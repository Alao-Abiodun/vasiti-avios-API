const errorHandler = (req, res, err) => {
  if (err.statusCode) {
    res.status(statusCode).json({
      status: "error",
      error: err.message,
      data: err.data,
    });
  } else if (err.status) {
    res.status(status).json({
      status: "error",
      error: err.message,
      data: [],
    });
  } else {
    res.status(500).json({
      status: "error",
      error: "Internal Server Error",
      data: [],
    });
  }
};

module.exports = errorHandler;
