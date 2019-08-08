let state = {
  profilePage: {
    postData: [
      {
        id: 1,
        name: 'Ivan',
        surname: 'Fadeev',
        message: 'ОуО!',
        get fullName(){
          return `${this.name} ${this.surname}`
        },
        message: 'Hello, world!',
        date: '04.08.19'
      },
      {
      id: 2,
        name: 'Ivan',
        surname: 'Fadeev',
        message: 'ОуО!',
        get fullName(){
          return `${this.name} ${this.surname}`
        },
        message: 'Another one!',
        date: '04.08.19',
      },
      {
        id: 3,
        name: 'Ivan',
        surname: 'Fadeev',
        message: 'ОуО!',
        get fullName(){
          return `${this.name} ${this.surname}`
        },
        message: 'I learning REACT!!',
        date: '04.08.19',
      },
    ]
  },
  
  dialogPage: {
    messagesData : [
    { id: 4, 
      name: 'Vladimir',
      surname: 'Kustov',
      message: 'Ваня, привет!!!!!',
      get fullName(){
        return `${this.name} ${this.surname}`
      }
    },
    { id: 4, 
      name: 'Vladimir',
      surname: 'Kustov',
      message: 'Чем занимаетесь?!',
      get fullName(){
        return `${this.name} ${this.surname}`
      }
    },
    { id: 4, 
      name: 'Vladimir',
      surname: 'Kustov',
      message: 'Как дела вообще?!',
      get fullName(){
        return `${this.name} ${this.surname}`
      }
    },
  ]
},
  {
    chatsData: [
    { id: 1, 
      name: 'Ivan',
      surname: 'Fadeev',
      message: 'Привет!',
      get fullName(){
        return `${this.name} ${this.surname}`
      }
    },
    { id: 2, 
      name: 'Dmitriy',
      surname: 'Menshikov',
      message: 'Привет, Что делаешь?',
      get fullName(){
        return `${this.name} ${this.surname}`
      }
    },
    { id: 3, 
      name: 'Alex',
      surname: 'Subbutin',
      message: 'Пока!',
      get fullName(){
        return `${this.name} ${this.surname}`
      }
    },
    { id: 4, 
      name: 'Vladimir',
      surname: 'Kustov',
      message: 'ОуО!',
      get fullName(){
        return `${this.name} ${this.surname}`
      }
    }
  ]}  
}

export default state;