{
    // 
    // access modifiers

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        public addDeposit(amount: number) {
            this._balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this._balance}`);
        }

        public getBlanch() {
            return this._balance;
        }
    }

    // protected abstract accounts

    class StudentAccount extends BankAccount {
        test() {
            this._balance 
        }

    }
    // 

    const goribManuseAccount = new BankAccount(111, 'Gorib', 2000)
    goribManuseAccount.addDeposit(2000);
    const myAccount = goribManuseAccount.getBlanch();
    console.log({ myAccount });






    // 

}