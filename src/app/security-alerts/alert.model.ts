export class Alert {

    constructor(
        public id: string, public userName: string, public password: string,
        public firstName: string, public lastName: string, public email: string,
        public loggingAlerts: boolean, public recognizedDevices: string[],
        public phoneNumber: string, public devicesNumber: string,
    ) {}
}