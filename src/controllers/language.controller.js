import { getConnection } from "../database/database";

const getLanguages = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT id, name, programmers FROM language"
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addLanguages = async (req, res) => {
  try {
    const { name, programmers } = req.body;
    if (
      name === (null || undefined || "") ||
      programmers === (null || undefined || "")
    ) {
      res
        .status(400)
        .json({ message: "Bad Request. Please fill all the fields" });
    }
    const language = { name, programmers };
    const connection = await getConnection();
    await connection.query("INSERT INTO language SET ?", language);
    res.json({ message: "Language added" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getLanguage = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT id, name, programmers FROM language WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteLanguage = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM language WHERE id = ?",
      id
    );
    res.json({ message: "Language deleted succesfully" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updateLanguage = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, programmers } = req.body;

    if (
      id === (null || undefined || "") ||
      name === (null || undefined || "") ||
      programmers === (null || undefined || "")
    ) {
      res
        .status(400)
        .json({ message: "Bad Request. Please fill all the fields" });
    }

    const language = { id, name, programmers };
    const connection = await getConnection();
    await connection.query("UPDATE language SET ? WHERE id = ?", [
      language,
      id,
    ]);
    res.json({ message: "Language updated succesfully" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getLanguages,
  addLanguages,
  getLanguage,
  deleteLanguage,
  updateLanguage,
};
