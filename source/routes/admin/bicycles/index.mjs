// Core
import express from 'express'

// Tools
import { getBicycles, createBicycle, getByBicycleId, updateByBicycleId, deleteByBicycleId } from './handlers.mjs'

const routes = express.Router()

/**
 * @openapi
 * '/admin/bicycles':
 *  get:
 *     tags:
 *     - Admin
 *     summary: Get bicycles
 *     security:
 *     - jwt: [ ]
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/BicyclesResponse'
 *       404:
 *         description: Bicycles not found
 */
routes.get('/', getBicycles)
/**
 * @openapi
 * '/admin/bicycles':
 *  post:
 *     tags:
 *     - Admin
 *     summary: Create bicycle
 *     security:
 *     - jwt: [ ]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateBicycleInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BicycleResponse'
 *      409:
 *        description: Conflict
 *      404:
 *        description: Bad request
 */
routes.post('/', createBicycle)
/**
 * @openapi
 * '/admin/bicycles/{bicycleId}':
 *  get:
 *     tags:
 *     - Admin
 *     summary: Get bicycle
 *     security:
 *     - jwt: [ ]
 *     parameters:
 *      - name: bicycleId
 *        in: path
 *        description: The id of the bicycle
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/BicycleResponse'
 *       404:
 *         description: Bicycle not found
 */
routes.get('/:bicycleId', getByBicycleId)
/**
 * @openapi
 * '/admin/bicycles':
 *  put:
 *     tags:
 *     - Admin
 *     summary: Update bicycle
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/UpdateBicycleInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BicycleResponse'
 *      409:
 *        description: Conflict
 *      404:
 *        description: Bad request
 */
routes.put('/:bicycleId', updateByBicycleId)
/**
 * @openapi
 * '/admin/bicycles':
 *  delete:
 *     tags:
 *     - Admin
 *     summary: Delete bicycle
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateBicycleInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BicycleResponse'
 *      409:
 *        description: Conflict
 *      404:
 *        description: Bad request
 */
routes.delete('/:bicycleId', deleteByBicycleId)

export { routes as bicycles }