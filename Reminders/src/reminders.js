class Reminder {
  constructor() {
    this.reminders = [];
  }
  getReminders = () => {
    return this.reminders;
  };
  createReminder = (data) => {
    if (this.reminders.length === 0) {
      data.id = 1;
    } else {
      data.id = this.reminders[(this.reminders.length = 1)].id + 1;
    }
    data.status = "Sin  leer";
    this.reminders.push(data);
    return data;
  };
  completeReminder = (data) => {
    let index = this.reminders.findIndex((rem) => rem.id === data.id);
    if (index !== -1) {
      this.reminders[index].status = "Leido";
      return this.reminders[index];
    } else {
      throw new Error("No reminder found");
    }
  };
  deleteReminders = () => {
    this.reminders = this.reminders.filter((rem) => (rem.status = "Sin leer"));
    return this.reminders;
  };
}

const reminder = new Reminder();
export default reminder;
