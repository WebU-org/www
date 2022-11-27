
import { nanoid } from "nanoid";
import URL from "../models/urlModel.js";

export default (req, res) => {
    const { url } = req.body;

    // Generate a unique id to identify the URL
    let id = nanoid(7);

    let newURL = new URL({ url, id });
    try {
        newURL.save();
    } catch (err) {
        res.send("An error was encountered! Please try again.");
    }
    // The shortened link: our server address with the unique id
    console.log({
        message: `http://localhost:8000/${newURL.id}`,
        type: "success",
    })
    res.json({
        message: `http://localhost:8000/${newURL.id}`,
        type: "success",
    });
}
