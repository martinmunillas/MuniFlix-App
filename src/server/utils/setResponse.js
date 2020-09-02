const response = {
  succes: (req, res, data, status) => {
    res.status(status || 200).send(data || 'Done Succesfully');
  },
  error: (req, res, error, message, status) => {
    res
      .status(status || 500)
      .send(message || 'There was an error, please try again in a few minutes');
    console.log(error)
  },
};

export default response;
