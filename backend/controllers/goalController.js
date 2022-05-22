// desc  Get goals
//route  GET /api/goals
//desc   Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

// desc  Set goal
//route  POST /api/goals
//desc   Private
const setGoal = (req, res) => {
  res.status(200).json({ message: "Set Goal" });
};

// desc  update goals
//route  PUT /api/goals/:id
//desc   Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// desc  Delete goals
//route  DELETE /api/goals
//desc   Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
