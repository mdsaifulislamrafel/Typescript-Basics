{
    // 
    // getter and setter

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        set deposit(amount: number) {
            this._balance += amount;
        }

        // public addDeposit(amount: number) {
        //     this._balance += amount;
        //     console.log(`Deposited ${amount}. New balance: ${this._balance}`);
        // }


        // getter
        get blanch() {
            return this._balance;
        }

        // public getBlanch() {
        //     return this._balance;
        // }


    }



    const goribManuseAccount = new BankAccount(111, 'Gorib', 2000)
    // goribManuseAccount.balnch = 0
    // goribManuseAccount.addDeposit(2000);

    const depositAmount = goribManuseAccount.deposit = 200;
    console.log({ depositAmount });


    // const myAccount = goribManuseAccount.getBlanch();

    const myAccount = goribManuseAccount.blanch; // property er moto kora
    console.log(myAccount);






    // 

}