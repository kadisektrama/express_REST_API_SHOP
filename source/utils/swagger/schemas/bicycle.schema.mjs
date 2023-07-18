
/**
 * @openapi
 * components:
 *  definitions:
 *    Bicycle:
 *      type: object
 *      properties:
 *        brakes:
 *          type: string
 *        color:
 *          type: string
 *        currency:
 *          $ref: '#/components/definitions/Currency'
 *        description:
 *          type: string
 *        frame_size:
 *          type: integer
 *        images:
 *          type: array
 *          items:
 *            $ref: '#/components/definitions/Image'
 *        pedals:
 *          type: string
 *        price:
 *          type: integer
 *        rating:
 *          type: integer
 *        reviews_count:
 *          type: integer
 *        rider_height:
 *          type: integer
 *        shock_absorber:
 *          type: boolean
 *        speed_count:
 *          type: integer
 *        title:
 *          type: string
 *        user_id:
 *          type: string
 *        wheel:
 *          type: integer
 *        _id:
 *          type: string
 *        __v:
 *          type: integer
 *        __t:
 *          type: string
 *      required:
 *      - brakes
 *      - color
 *      - description
 *      - frame_size
 *  schemas:
 *    BicycleResponse:
 *      type: object
 *      properties:
 *        data:
 *          $ref: '#/components/definitions/Bicycle'
 *    BicyclesResponse:
 *      type: object
 *      properties:
 *        data:
 *          type: array
 *          items:
 *            $ref: '#/components/definitions/Bicycle'
 *    UpdateBicycleResponse:
 *      $ref: '#/components/definitions/Bicycle'
 *    CreateBicycleInput:
 *      $ref: '#/components/definitions/Bicycle'
 */