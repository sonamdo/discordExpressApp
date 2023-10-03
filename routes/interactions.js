import express from 'express';
import { InteractionType, InteractionResponseType } from 'discord-interactions';
var router = express.Router();

router.post('/', async function (req, res) {
    // Interaction type and data
    const { type, id, data } = req.body;
  
    /**
     * Handle verification requests
     */
    if (type === InteractionType.PING) {
      return res.send({ type: InteractionResponseType.PONG });
    }
  
    /**
     * Handle slash command requests
     * See https://discord.com/developers/docs/interactions/application-commands#slash-commands
     */
    if (type === InteractionType.APPLICATION_COMMAND) {
      const { name } = data;
      // "fubar" test command
      if (name === 'fubar') {
        // Send a message into the channel where command was triggered from
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: 'Fu To The Bar',
          },
        });
      }

      // Guinty schedule command
      if (name === 'ginty') {
        // Send a message into the channel where command was triggered from
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: 'Ginty has nothing scheduled at the moment',
          },
        });
      }

    }
  
    /**
     * Handle requests from interactive components
     * See https://discord.com/developers/docs/interactions/message-components#responding-to-a-component-interaction
     */
    if (type === InteractionType.MESSAGE_COMPONENT) {
     console.log('HERE!')
    }
  });

export const interactionsRouter = router;
