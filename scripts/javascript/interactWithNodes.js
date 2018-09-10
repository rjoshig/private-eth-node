/*var Web3 = require('web3');
var net = require('net');
var w3 = new Web3(new Web3.providers.IpcProvider('/home/rjoshi/.ethereum/privatechain/node1/geth.ipc', net)); 
console.log(w3.version);
console.log(w3.eth.coinbase)
console.log(w3.eth.getBalance("0x70A4Ba34efF0f60d12A1108e4F115aF42B66191B"))
*/

var http = require('http');
var net = require('net');
var Web3 = require('web3');
var prompt = require('prompt');

var net = require('net'); 
//var web3 = new Web3('/home/rjoshi/.ethereum/privatechain/node1/geth.ipc', net);
//var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8501'));
var web3 = new Web3(new Web3.providers.IpcProvider('/home/rjoshi/.ethereum/privatechain/node1/geth.ipc'));  

// same output as with option below
// var web3 = new Web3(new Web3.providers.IpcProvider('/Users/sebastian/Library/Ethereum/geth.ipc', net));
var version = web3.version;
console.log(version); 

console.log("DEBUG: Start Executing Scxripts", version)
web3.eth.getAccounts(console.log);

console.log("Hello World");
//var username = prompt("What is your name?");
//console.log(username)




/*
var web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");

import sys
import getpass
from web3 import Web3, IPCProvider
from web3.middleware import geth_poa_middleware
w3 = Web3(IPCProvider('/home/rjoshi/.ethereum/privatechain/node1/geth.ipc'))
w3.middleware_stack.inject(geth_poa_middleware, layer=0)


##Hardcoded constants
chainId=1218



print("DEBUG: Print Version :", w3.version.node)
############################################FUNCTIONS#################################################
##Function to print menu
def print_menu():
    print (30 * "-" , "MENU" , 30 * "-")
    print ("1. Create New Account")
    print ("2. View Account Balance")
    print ("3. Import Account from Private Key")
    print( "4. Send Transaction")
    print ("5. Exit")
    print (67 * "-")

##Function to accept new password from user. returns password after validation
def create_new_password(): 
    pswd1 = ''
    pswd2 = ''
    pswd1 = getpass.getpass('Enter Password:')
    pswd2 = getpass.getpass('Re-enter Password:')
    try:
        if pswd1 == pswd2:
            print("DEBUG: Password Entered Correctly")
            return pswd1
        else:    
            raise ValueError('Password Mismatch')
    except(ValueError, IndexError):
        exit('Could not complete request')

def read_password():
    pswd = ''
    pswd = getpass.getpass('Enter Password:')
    return pswd


##Function to create new ethereum account from user
def eth_create_new_account(_pswd):
    newAccount = w3.eth.account.create(_pswd)
    newAddress = newAccount.address
    newPrivateKey = newAccount.privateKey
    print('New Address Generated   : {}'.format(newAddress))
    print('Private Key: {}'.format(newPrivateKey.hex()))

## This will return balance(string) 
def eth_view_account_balance(_addr):
    balanceWei=w3.eth.getBalance(_addr)
    balanceEther=w3.fromWei(balanceWei, "ether")
    return balanceEther

def eth_send_ether(_addrFrom, _addrTo, _amount, _key, _mode):  ##addrFrom is not used in mode2
    amountWei=w3.toWei( _amount, "ether")

    input("DEBUG: Enter Function 1: Press Any Key??")
    if _mode == 1:  #Use password
        print ("DEBUG: mode:",_mode)
        unlockStat=w3.personal.unlockAccount(_addrFrom, _key, duration=50 )
        if unlockStat is True:
            send_tx = w3.eth.sendTransaction({ 'to': _addrTo , 'from': _addrFrom, 'value': amountWei })
            print ("TxHash", send_tx.hash)
           
    if _mode == 2:  #Use private key to sign
        input("DEBUG: Enter Function 2: Press Any Key??")
        account = w3.eth.accounts.privateKeyToAccount(_key);
        varAddrFrom=account.address
        print ("From Address :", varAddrFrom)  
        print ("From Key :", _key)   
        raw_tx= {
            "from": varAddrFrom,
            "to": _addrTo,
            "value": amountWei,
            "gas": 200000,
            "chainId": chainId
        }
        print ("DEBUG: From Address :", _key)   
        signed_tx = w3.eth.account.signTransaction(raw_tx, _key)
        print ("TxHash", signed_tx.hash)
        print ("rawTransaction", signed_tx.rawTransaction)
        print ("r", signed_tx.r)
        print ("s", signed_tx.s)
        print ("v", signed_tx.v)
        sendRaw_txId=w3.eth.sendRawTransaction(signed_tx.rawTransaction) 
        print ("sendRaw_txId:", sendRaw_txId)



############################################END FUNCTIONS#################################################

### CODE ENTRY POINT
loop=True      
while loop:         ## While loop which will keep going until loop = False
    print_menu()    ## Displays menu
    choice = int(input("Enter your choice [1-5]: "))
    print ("DEBUG: Choice", choice)
    if choice==1:     
        print ("Create New Account")
        user_paswd=create_new_password()
        eth_create_new_account(user_paswd)

    elif choice==2:
        print ("View Account Balance")
        varAddress=input("Enter ETH Address : ")
        balance=eth_view_account_balance(varAddress)
        print("Address : ",varAddress)
        print("Balance : ",balance ,"ether")

    elif choice==3:
        print ("Menu 3 has been selected")
    ## You can add your code or functions here
    elif choice==4:
        print ("1. Send Ether Using Password")
        print ("2. Send Ether Using Private Key")
        choice4 = int(input("Enter your choice : "))
        if choice4==1:
            varMode=1
            varFromAddress=input("From ETH Address : ")
            varToAddress=input("To ETH Address : ")
            varAmountEther=input("Amount (Ether) : ")
            varPaswd=read_password()
        elif choice4==2:
            varMode=2
            varFromAddress="x"
            varPaswd=input("Enter Private Key : ")
            varToAddress=input("To ETH Address : ")
            varAmountEther=input("Amount (Ether) : ")

        else:
            input("Wrong option selection. Enter any key to try again..")
        
        eth_send_ether(varFromAddress, varToAddress, varAmountEther, varPaswd,varMode)
        input("DEBUG: Press Any Key??")

    ## You can add your code or functions here
    elif choice==5:
        print ("Menu 5 has been selected")
    ## You can add your code or functions here
        loop=False # This will make the while loop to end as not value of loop is set to False
    else:
    # Any integer inputs other than values 1-5 we print an error message
        input("Wrong option selection. Enter any key to try again..")
*/