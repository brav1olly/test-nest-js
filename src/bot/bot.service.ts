import { OnModuleInit } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class BotService {
    private bot: TelegramBot;
    private chatId: string = "7663447196"

    constructor() {
        const token = "7663447196:AAEvqpNDvykuIm5UwpJl5se-vYkqXLE_dNo"
        
        this.bot = new TelegramBot(token, { polling: true })
    }

  async sendMessage(message: string): Promise<void> {
      try {
          await this.bot.sendMessage(this.chatId, message);
      } catch (error) {
          console.error('Ошибка отправки сообщения в Telegram:', error);
      }
  }

    onModuleInit() {

        this.bot.onText(/\/start/, (msg) => {
            const chatId = msg.chat.id;
      
            const options = {
              reply_markup: {
                inline_keyboard: [
                  [
                    {
                      text: 'Открыть Web App',
                      web_app: { url: 'https://educator-ten.vercel.app/' },  // Укажи URL твоего веб-приложения
                    },
                  ],
                ],
              },
            };
      
            this.bot.sendMessage(chatId, 'Нажмите кнопку для открытия Web App:', options);
        });

        this.bot.on('message', (msg) => {
            const chatId = msg.chat.id;
    
            this.bot.sendMessage(chatId, `Привет! Как я могу помочь? ${msg.from?.first_name}`);
        });
    }

    // sendMessage(chatId: number, text: string) {
    //     this.bot.sendMessage(chatId, text);
    // }
}