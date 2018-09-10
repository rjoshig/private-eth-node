
1. Private Ethereum node (Proofof Authority network) with 3 node
2. install geth
3. For first run initialize node using the initGenesis.sh script
4. To Run the node use the startNodes.sh script. (before using this you will need to create a one time bootkey) using bootnode -genkey  ${HOME}/.ethereum/privatechain/bootA.key
5. The structure of the node like below:
		BootNode
		    |
		    |
		    V
	      ______________
	     |	    |	    |
	     V      V       V
	   Node1   Node2    Node3

5. You may need to update firewall settings to allow local ports to talk to each other

6. To be able to access the javascript console use below commands

7. python3 is installed in virtualenv

alias gatp1c='geth attach ipc://${HOME}/.ethereum/privatechain/node1/geth.ipc'
alias gatp2c='geth attach ipc://${HOME}/.ethereum/privatechain/node2/geth.ipc'
alias gatp3c='geth attach ipc://${HOME}/.ethereum/privatechain/node3/geth.ipc'
alias gatpy="source ~/.venv-py3/bin/activate"

8. blockexp repository has the initial code to connect to this node using http request. 
