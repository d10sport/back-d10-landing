import getConnection from "../../database/connection.mysql.js";
import { variablesDB } from "../../utils/params/const.database.js";
import { responseQueries } from "../../common/enum/queries/response.queries.js";
import { deleteFileS3Function, uploadFileS3Function } from "../../lib/s3/s3.js";

// Actualizar título de servicios
export const updateAdminServicesTitle = async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    if (!id || !title) {
        return res.json(responseQueries.error({ message: "Datos incompletos" }));
    }

    try {
        const conn = await getConnection();
        const db = variablesDB.landing;

        const update = await conn.query(
            `UPDATE ${db}.parametersServices
             SET section_one = JSON_SET(section_one,
                '$.title', ?)
             WHERE id = ?`,
            [title, id]
        );

        if (update.affectedRows === 0) {
            return res.json(responseQueries.error({ message: "No se encontró el registro" }));
        }

        return res.json(responseQueries.success({ message: "Datos actualizados con éxito" }));
    } catch (error) {
        return res.json(responseQueries.error({ message: "Error al actualizar los datos", error }));
    }
};

// Actualizar servicios uno
export const updateAdminServicesOne = async (req, res) => {
    const { id } = req.params;
    const file = req.file;
    const data = JSON.parse(req.body.data);
    const { photo, title, subtitle, description } = data;

    const deleteFiles3 = await deleteFileS3Function(photo);
    if (deleteFiles3.error) {
        return res.json(responseQueries.error({
            message: deleteFiles3.message
        }));
    }

    const linkFile = await uploadFileS3Function({
        page: req.body.page, ...file
    });
    if (linkFile.error) {
        return res.json(responseQueries.error({
            message: linkFile.error
        }));
    }

    if (!id || !linkFile.url || !title || !subtitle || !description) {
        return res.json(responseQueries.error({ message: "Datos incompletos" }));
    }

    try {
        const conn = await getConnection();
        const db = variablesDB.landing;

        const update = await conn.query(
            `UPDATE ${db}.parametersServices
             SET section_two = JSON_SET(section_two,
                '$.photo', ?,
                '$.title', ?,
                '$.subtitle', ?,
                '$.description', ?)
             WHERE id = ?`,
            [linkFile.url, title, subtitle, description, id]
        );

        if (update.affectedRows === 0) {
            return res.json(responseQueries.error({ message: "No se encontró el registro" }));
        }

        return res.json(responseQueries.success({ message: "Datos actualizados con éxito" }));
    } catch (error) {
        return res.json(responseQueries.error({ message: "Error al actualizar los datos", error }));
    }
};

// Actualizar servicios dos
export const updateAdminServicesTwo = async (req, res) => {
    const { id } = req.params;
    const file = req.file;
    const data = JSON.parse(req.body.data);
    const { photo, title, subtitle, description } = data;

    const deleteFiles3 = await deleteFileS3Function(photo);
    if (deleteFiles3.error) {
        return res.json(responseQueries.error({ message: deleteFiles3.message }));
    }

    const linkFile = await uploadFileS3Function({ page: req.body.page, ...file });
    if (linkFile.error) {
        return res.json(responseQueries.error({ message: linkFile.error }));
    }

    if (!id || !linkFile.url || !title || !subtitle || !description) {
        return res.json(responseQueries.error({ message: "Datos incompletos" }));
    }

    try {
        const conn = await getConnection();
        const db = variablesDB.landing;

        const update = await conn.query(
            `UPDATE ${db}.parametersServices
             SET section_three = JSON_SET(section_three,
                '$.photo', ?,
                '$.title', ?,
                '$.subtitle', ?,
                '$.description', ?)
             WHERE id = ?`,
            [linkFile.url, title, subtitle, description, id]
        );

        if (update.affectedRows === 0) {
            return res.json(responseQueries.error({ message: "No se encontró el registro" }));
        }

        return res.json(responseQueries.success({ message: "Datos actualizados con éxito" }));
    } catch (error) {
        return res.json(responseQueries.error({ message: "Error al actualizar los datos", error }));
    }
};

// Actualizar servicios tres
export const updateAdminServicesThree = async (req, res) => {
    const { id } = req.params;
    const file = req.file;
    const data = JSON.parse(req.body.data);
    const { photo, title, subtitle, description } = data;

    const deleteFiles3 = await deleteFileS3Function(photo);
    if (deleteFiles3.error) {
        return res.json(responseQueries.error({ message: deleteFiles3.message }));
    }

    const linkFile = await uploadFileS3Function({ page: req.body.page, ...file });
    if (linkFile.error) {
        return res.json(responseQueries.error({ message: linkFile.error }));
    }

    if (!id || !linkFile.url || !title || !subtitle || !description) {
        return res.json(responseQueries.error({ message: "Datos incompletos" }));
    }

    try {
        const conn = await getConnection();
        const db = variablesDB.landing;

        const update = await conn.query(
            `UPDATE ${db}.parametersServices
             SET section_four = JSON_SET(section_four,
                '$.photo', ?,
                '$.title', ?,
                '$.subtitle', ?,
                '$.description', ?)
             WHERE id = ?`,
            [linkFile.url, title, subtitle, description, id]
        );

        if (update.affectedRows === 0) {
            return res.json(responseQueries.error({ message: "No se encontró el registro" }));
        }

        return res.json(responseQueries.success({ message: "Datos actualizados con éxito" }));
    } catch (error) {
        return res.json(responseQueries.error({ message: "Error al actualizar los datos", error }));
    }
};