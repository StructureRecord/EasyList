class NewTest {
  data: any

  member: any

  constructor(data: any, member: any) {
    this.data = data;
    this.member = member;
  }
}

export const newClass = new NewTest('', '');
