#!/bin/bash
## run this only if you wanted to regenerate boot key
##bootnode -genkey  ${HOME}/.ethereum/privatechain/bootA.key
##bootnode -genkey  ${HOME}/.ethereum/privatechain/bootB.key

dt1=`date +%Y%m%d%H`
echo $dt1

bootnodelog="${HOME}/.ethereum/privatechain/logs/bootnode_start_${dt1}.log"
node1log="${HOME}/.ethereum/privatechain/logs/node1_start_${dt1}.log"
node2log="${HOME}/.ethereum/privatechain/logs/node2_start_${dt1}.log"
node3log="${HOME}/.ethereum/privatechain/logs/node3_start_${dt1}.log"


##start BOOTNODE on port 30310
 bootnode -nodekey  ${HOME}/.ethereum/privatechain/bootA.key -verbosity 9 -addr :30310 2> $bootnodelog&
BOOTNODE_PID=$!
 #bootnode -nodekey  ${HOME}/.ethereum/privatechain/bootB.key -verbosity 9 -addr :30320 2> $bootnodeBlog&
####AAAAAAAAAAAAAAAA
##start node1 and mine on port 30311
geth --datadir ${HOME}/.ethereum/privatechain/node1/ --syncmode 'full' --port 30311 --rpc --rpcaddr 'localhost' --rpccorsdomain "*" --rpcport 8501 --rpcapi 'personal,db,eth,net,web3,txpool,miner' --bootnodes 'enode://a96b9f419dd2e1eab8f7e29f327fe9c4ea04f50249bd386bcb7c214a78d35c384f4dfa1d81bf39b5c9266186a1bb9fb45bdb78d282b50948ce57e8b8aa1a3024@127.0.0.1:30310' --networkid 1218 --gasprice '1' -unlock '0x277f73cc454258ed27f9c86f9a0c7dd12ee0773b' --password ${HOME}/.ethereum/privatechain/node1/password.txt --mine 2> $node1log&
NODE1_PID=$!


##start node2 and mine on port 30312
geth --datadir ${HOME}/.ethereum/privatechain/node2/ --syncmode 'full' --port 30312 --rpc --rpcaddr 'localhost' --rpccorsdomain "*" --rpcport 8502 --rpcapi 'personal,db,eth,net,web3,txpool,miner' --bootnodes 'enode://a96b9f419dd2e1eab8f7e29f327fe9c4ea04f50249bd386bcb7c214a78d35c384f4dfa1d81bf39b5c9266186a1bb9fb45bdb78d282b50948ce57e8b8aa1a3024@127.0.0.1:30310' --networkid 1218 --gasprice '1' -unlock '0x1ccd4457cfe8bc8157a3f763a140ee80f41cefd6' --password ${HOME}/.ethereum/privatechain/node2/password.txt --mine  2> $node2log&
NODE2_PID=$!


##start node3 and mine on port 30312
geth  --datadir ${HOME}/.ethereum/privatechain/node3/ --syncmode 'full' --port 30313 --rpc --rpcaddr 'localhost' --rpcport 8503 --rpcapi 'personal,db,eth,net,web3,txpool,miner' --bootnodes 'enode://a96b9f419dd2e1eab8f7e29f327fe9c4ea04f50249bd386bcb7c214a78d35c384f4dfa1d81bf39b5c9266186a1bb9fb45bdb78d282b50948ce57e8b8aa1a3024@127.0.0.1:30310' --networkid 1218 2> $node3log&
#--gasprice '1' -unlock '0x5ca94ce52e87b85cd0f1cf19acf9394ff28077d1' --password ${HOME}/.ethereum/privatechain/node3/password.txt --mine  2> $node3log&
NODE3_PID=$!

echo "BOOTNODE_PID NODE1_PID NODE2_PID NODE3_PID"
echo "------------------------------------------"
echo "${BOOTNODE_PID} ${NODE1_PID} ${NODE2_PID} ${NODE3_PID}"
echo ""
echo "------------------------------------------"
echo "TO KILL AL THE NODES: kill -9 ${BOOTNODE_PID} ${NODE1_PID} ${NODE2_PID} ${NODE3_PID}"
echo "BOOT KEY: ${HOME}/.ethereum/privatechain/bootA.key"  ##this is generated once at the start of setting up
echo "bootnodelog : $bootnodelog"
echo "node1 log : $node1log"
echo "node2 log : $node2log"
echo "node3 log : $node3log"

