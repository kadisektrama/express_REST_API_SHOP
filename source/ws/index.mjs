import express from "express";
import http from "http";
import { WebSocketServer } from 'ws';
import dg from 'debug';
import { ChatMessages } from "../controllers/index.mjs";

const debug = dg('express:ws')
const web_socket_port = process.env.NODE_WS_PORT || 8081;

// ws
const app = express()

//initialize a simple http server
const server = http.createServer(app)

//initialize the WebSocket server instance
const webSocketServer = new WebSocketServer({ server })

webSocketServer.on('connection', (ws, req, client) => {
    ws.on('message', m => {
        m = JSON.parse(m.toString())
        ws.id = m.chat_id
        let messages, message, body

        switch (m.type) {
            case 'connection':
                messages = new ChatMessages(m.chat_id)
                messages.get()
                    .then((res) => ws.send(JSON.stringify(res)))
                break;

            case 'message':
                body = {
                    _id: m.chat_id,
                    message: m.message,
                }

                message = new ChatMessages(body)
                message.create(m.uid)
                    .then(() => {
                        messages = new ChatMessages(m.chat_id)
                        messages.get()
                            .then((res) => {
                                webSocketServer.clients.forEach(client => {
                                    if (client.id === ws.id) client.send(JSON.stringify(res))
                                });
                            })
                    })

                break;
        }
    })

    ws.on('open', function open() {
        //ws.send('something');
    });

    ws.on("error", e => ws.send(e))

    //ws.send('Hi there, I am a WebSocket server')
});

const broadcastConnection = (ws, msg) => {

}


server.listen(web_socket_port, () => debug(`Web socket started on port ${web_socket_port}`))

