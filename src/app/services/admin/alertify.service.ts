import { Injectable } from '@angular/core';
declare var alertify: any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  message(message: string, options: Partial<AlertifyOptions>) {
    alertify.set('notifier', 'delay', options.delay);
    alertify.set('notifier', 'position', options.position);
    const msj = alertify[options.messageType](message);
    if (options.dismissOthers) {
      msj.dismissOthers();
    }
  }
  dismis() {
    alertify.dismissAll();
  }
}
export class AlertifyOptions {
  messageType: MessageType = MessageType.Message;
  position: Position = Position.BottomRigth;
  delay: number = 5;
  dismissOthers: boolean = false;
}
export enum MessageType {
  Error = "error",
  Message = "message",
  Success = "success",
  Notify = "notify",
  Warning = "warning"
}
export enum Position {
  BottomRigth = "bottom-right",
  TopRight = "top-right",
  TopCenter = "top-center",
  TopLeft = "top-left",
  ButtomCenter = "bottom-center",
  ButtomLeft = "bottom-left",
}






