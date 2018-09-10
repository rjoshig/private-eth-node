#!/bin/bash
##INIT POA PRIVATE  https://hackernoon.com/setup-your-own-private-proof-of-authority-ethereum-network-with-geth-9a0a3750cda8
rm -rf ~/.ethereum/privatechain/node1/geth
rm -rf ~/.ethereum/privatechain/node2/geth
rm -rf ~/.ethereum/privatechain/node3/geth

geth --nodiscover --datadir /home/rjoshi/.ethereum/privatechain/node1 init /home/rjoshi/.ethereum/privatechain/genesis.json
geth --nodiscover --datadir /home/rjoshi/.ethereum/privatechain/node2 init /home/rjoshi/.ethereum/privatechain/genesis.json
geth --nodiscover --datadir /home/rjoshi/.ethereum/privatechain/node3 init /home/rjoshi/.ethereum/privatechain/genesis.json
