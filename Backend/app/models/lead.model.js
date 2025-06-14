module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      status: {
        type: String,
        enum: ["New", "Engaged", "Proposal Sent", "Closed-Won", "Closed-Lost"],
        default: "New"
      }
    },
    { timestamps: { createdAt: true, updatedAt: false } }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Lead = mongoose.model("lead", schema);
  return Lead;
};
