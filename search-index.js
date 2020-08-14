var N=null,E="",T="t",U="u",searchIndex={};
var R=["from_bytes","to_bytes","result","try_from","try_into","borrow","borrow_mut","type_id","typeid","to_owned","clone_into","TokenTemplate","TokenType","ContractCommon","address","tokentemplate","delete_token","transfer_to_layer2","decode","source","encode","TrMulParam","TrFromMulParam","AppMulParam","transfer","RegisterParam","buy_dtoken_reward","invoke"];
searchIndex["accountant"]={"doc":E,"i":[[5,R[27],"accountant",E,N,[[]]]],"p":[]};
searchIndex["common"]={"doc":E,"i":[[3,"OrderId","common",E,N,N],[12,"item_id",E,E,0,N],[12,"tx_hash",E,E,0,N],[3,R[11],E,E,N,N],[12,"data_id",E,E,1,N],[12,"token_hash",E,E,1,N],[12,"endpoint",E,E,1,N],[12,"token_name",E,E,1,N],[12,"token_symbol",E,E,1,N],[3,"Fee",E,E,N,N],[12,"contract_addr",E,E,2,N],[12,"contract_type",E,E,2,N],[12,"count",E,E,2,N],[3,R[13],E,E,N,N],[4,R[12],E,E,N,N],[13,"ONT",E,E,3,N],[13,"ONG",E,E,3,N],[13,"OEP4",E,E,3,N],[17,"CONTRACT_COMMON",E,E,N,N],[11,R[1],E,E,0,[[["self"]],[["vec",["u8"]],["u8"]]]],[11,R[0],E,E,0,[[],["orderid"]]],[11,R[0],E,E,1,[[],["self"]]],[11,R[1],E,E,1,[[["self"]],[["vec",["u8"]],["u8"]]]],[11,"new",E,E,1,[[["option",["vec"]],["vec",["u8"]],["vec",["vec"]],["u8"]],["self"]]],[11,"default",E,E,2,[[],["self"]]],[11,"admin",E,E,4,[[["self"]],[R[14]]]],[11,"destroy",E,E,4,[[["self"]]]],[11,"migrate",E,E,4,[[["u128"],["str"],["self"]],["bool"]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[3],E,E,0,[[[U]],[R[2]]]],[11,"into",E,E,0,[[],[U]]],[11,R[4],E,E,0,[[],[R[2]]]],[11,R[5],E,E,0,[[["self"]],[T]]],[11,R[6],E,E,0,[[["self"]],[T]]],[11,R[7],E,E,0,[[["self"]],[R[8]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[3],E,E,1,[[[U]],[R[2]]]],[11,"into",E,E,1,[[],[U]]],[11,R[4],E,E,1,[[],[R[2]]]],[11,R[5],E,E,1,[[["self"]],[T]]],[11,R[6],E,E,1,[[["self"]],[T]]],[11,R[7],E,E,1,[[["self"]],[R[8]]]],[11,R[9],E,E,1,[[["self"]],[T]]],[11,R[10],E,E,1,[[["self"],[T]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[3],E,E,2,[[[U]],[R[2]]]],[11,"into",E,E,2,[[],[U]]],[11,R[4],E,E,2,[[],[R[2]]]],[11,R[5],E,E,2,[[["self"]],[T]]],[11,R[6],E,E,2,[[["self"]],[T]]],[11,R[7],E,E,2,[[["self"]],[R[8]]]],[11,R[9],E,E,2,[[["self"]],[T]]],[11,R[10],E,E,2,[[["self"],[T]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,R[3],E,E,4,[[[U]],[R[2]]]],[11,"into",E,E,4,[[],[U]]],[11,R[4],E,E,4,[[],[R[2]]]],[11,R[5],E,E,4,[[["self"]],[T]]],[11,R[6],E,E,4,[[["self"]],[T]]],[11,R[7],E,E,4,[[["self"]],[R[8]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[3],E,E,3,[[[U]],[R[2]]]],[11,"into",E,E,3,[[],[U]]],[11,R[4],E,E,3,[[],[R[2]]]],[11,R[5],E,E,3,[[["self"]],[T]]],[11,R[6],E,E,3,[[["self"]],[T]]],[11,R[7],E,E,3,[[["self"]],[R[8]]]],[11,R[9],E,E,3,[[["self"]],[T]]],[11,R[10],E,E,3,[[["self"],[T]]]],[11,"clone",E,E,1,[[["self"]],[R[15]]]],[11,"clone",E,E,2,[[["self"]],["fee"]]],[11,"clone",E,E,3,[[["self"]],["tokentype"]]],[11,R[18],E,E,0,[[[R[19]]],[["error"],[R[2],["error"]]]]],[11,R[18],E,E,1,[[[R[19]]],[["error"],[R[2],["error"]]]]],[11,R[18],E,E,2,[[[R[19]]],[["error"],[R[2],["error"]]]]],[11,R[18],E,E,3,[[[R[19]]],[[R[2],["error"]],["error"]]]],[11,R[20],E,E,0,[[["self"],["sink"]]]],[11,R[20],E,E,1,[[["self"],["sink"]]]],[11,R[20],E,E,2,[[["self"],["sink"]]]],[11,R[20],E,E,3,[[["self"],["sink"]]]]],"p":[[3,"OrderId"],[3,R[11]],[3,"Fee"],[4,R[12]],[3,R[13]]]};
searchIndex["data_id"]={"doc":E,"i":[[5,"reg_id_add_attribute_array","data_id","register data_id and add_attribute for dataId",N,[[["vec",["vec"]],["vec",["u8"]]],["bool"]]],[5,R[27],E,E,N,[[]]]],"p":[]};
searchIndex["dtoken"]={"doc":E,"i":[[5,"update_admin","dtoken","update admin address",N,[[[R[14]]],["bool"]]],[5,"get_admin",E,"query admin address",N,[[],[R[14]]]],[5,"generate_dtoken",E,"generate dtoken",N,[[[R[14]],["u128"]],["bool"]]],[5,"generate_dtoken_for_other",E,E,N,[[[R[14]],["u128"]],["bool"]]],[5,"generate_dtoken_multi",E,E,N,[[["u128"],[R[14]]],["bool"]]],[5,"get_token_template",E,E,N,[[],[["option",[R[15]]],[R[15]]]]],[5,"create_token_template",E,E,N,[[[R[14]],[R[15]]],["bool"]]],[5,"update_token_template",E,E,N,[[[R[15]]],["bool"]]],[5,"remove_token_template",E,E,N,[[],["bool"]]],[5,"verify_creator_sig",E,E,N,[[],["bool"]]],[5,"verify_creator_sig_multi",E,E,N,[[],["bool"]]],[5,"authorize_token_template",E,E,N,[[],["bool"]]],[5,"remove_authorize_addr",E,E,N,[[],["bool"]]],[5,"authorize_token_template_multi",E,E,N,[[],["bool"]]],[5,"get_authorized_addr",E,E,N,[[],[["vec",[R[14]]],[R[14]]]]],[5,"get_token_id_by_template_id",E,E,N,[[],[["vec",["u8"]],["u8"]]]],[5,"get_template_id_by_token_id",E,E,N,[[],[["vec",["u8"]],["u8"]]]],[5,"use_token",E,"use token, the buyer of the token has the right to consume…",N,[[[R[14]],["u128"]],["bool"]]],[5,R[16],E,E,N,[[[R[14]]],["bool"]]],[5,"use_token_by_agent",E,"use token by agent, the agent of the token has the right…",N,[[[R[14]],["u128"]],["bool"]]],[5,"set_agents",E,"set agents, this method will set agents more than one…",N,[[["vec",["u128"]],["vec",[R[14]]],["u128"],["vec",["vec"]],["vec",["u8"]],[R[14]],[R[14]]],["bool"]]],[5,"set_token_agents",E,"set token agents",N,[[["vec",[R[14]]],["vec",["u128"]],["u128"],[R[14]],[R[14]]],["bool"]]],[5,"set_token_agents_inner",E,E,N,[[[R[14]]],["bool"]]],[5,"get_agent_balance",E,E,N,[[[R[14]]],["u128"]]],[5,"add_agents",E,"add_agents, this method append agents for the all token",N,[[["vec",["u128"]],["vec",[R[14]]],["u128"],["vec",["vec"]],["vec",["u8"]],[R[14]],[R[14]]],["bool"]]],[5,"add_token_agents",E,"add_agents, this method only append agents for the…",N,[[["vec",["u128"]],["u128"],[R[14]]],["bool"]]],[5,"add_token_agents_inner",E,E,N,[[[R[14]]],["bool"]]],[5,"remove_agents",E,"product owner remove all the agents",N,[[["vec",[R[14]]],["vec",["vec"]],["vec",["u8"]],[R[14]],[R[14]]],["bool"]]],[5,"remove_token_agents",E,"product owner remove the agents of specified token",N,[[[R[14]]],["bool"]]],[5,"remove_token_agents_inner",E,E,N,[[[R[14]]],["bool"]]],[5,"transfer_dtoken_multi",E,E,N,[[["u128"],[R[14]]],["bool"]]],[5,"transfer_dtoken",E,E,N,[[[R[14]],["u128"]],["bool"]]],[5,R[17],E,"transfer dtoken to layer2.",N,[[[R[14]],["u128"]],["bool"]]],[5,"set_layer2_id",E,"set layer2 id to enable cross layer dtoken transfer.",N,[[["u128"]],["bool"]]],[5,"get_layer2_id",E,"return layer2 id set before, return 0 if unset.",N,[[],["u128"]]],[5,R[27],E,E,N,[[]]],[0,"oep8",E,E,N,N],[3,R[21],"dtoken::oep8",E,N,N],[12,"from",E,E,0,N],[12,"to",E,E,0,N],[12,"id",E,E,0,N],[12,"amt",E,E,0,N],[3,R[22],E,E,N,N],[12,"spender",E,E,1,N],[12,"from",E,E,1,N],[12,"to",E,E,1,N],[12,"id",E,E,1,N],[12,"amt",E,E,1,N],[3,R[23],E,E,N,N],[12,"owner",E,E,2,N],[12,"spender",E,E,2,N],[12,"id",E,E,2,N],[12,"amt",E,E,2,N],[3,"Balance",E,E,N,N],[12,"id",E,E,3,N],[12,"amt",E,E,3,N],[5,"name",E,E,N,[[],[["vec",["u8"]],["u8"]]]],[5,"symbol",E,E,N,[[],[["vec",["u8"]],["u8"]]]],[5,"total_supply",E,E,N,[[],["u128"]]],[5,"balance_of",E,E,N,[[[R[14]]],["u128"]]],[5,"destroy_token",E,E,N,[[[R[14]],["u128"]]]],[5,"balances_of",E,E,N,[[[R[14]]],[["balance"],["vec",["balance"]]]]],[5,"generate_token",E,E,N,[[["u128"],[R[14]]],[["vec",["u8"]],["u8"]]]],[5,R[16],E,E,N,[[]]],[5,R[24],E,E,N,[[[R[14]],["u128"]],["bool"]]],[5,R[17],E,E,N,[[["u128"],[R[14]]],["bool"]]],[5,"transfer_inner",E,E,N,[[[R[14]],["u128"]],["bool"]]],[5,"transfer_multi",E,E,N,[[],["bool"]]],[5,"approve",E,E,N,[[[R[14]],["u128"]],["bool"]]],[5,"transfer_from",E,E,N,[[[R[14]],["u128"]],["bool"]]],[5,"transfer_from_multi",E,E,N,[[],["bool"]]],[5,"approve_multi",E,E,N,[[],["bool"]]],[5,"allowance",E,E,N,[[[R[14]]],["u128"]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[3],E,E,0,[[[U]],[R[2]]]],[11,"into",E,E,0,[[],[U]]],[11,R[4],E,E,0,[[],[R[2]]]],[11,R[5],E,E,0,[[["self"]],[T]]],[11,R[6],E,E,0,[[["self"]],[T]]],[11,R[7],E,E,0,[[["self"]],[R[8]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[3],E,E,1,[[[U]],[R[2]]]],[11,"into",E,E,1,[[],[U]]],[11,R[4],E,E,1,[[],[R[2]]]],[11,R[5],E,E,1,[[["self"]],[T]]],[11,R[6],E,E,1,[[["self"]],[T]]],[11,R[7],E,E,1,[[["self"]],[R[8]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[3],E,E,2,[[[U]],[R[2]]]],[11,"into",E,E,2,[[],[U]]],[11,R[4],E,E,2,[[],[R[2]]]],[11,R[5],E,E,2,[[["self"]],[T]]],[11,R[6],E,E,2,[[["self"]],[T]]],[11,R[7],E,E,2,[[["self"]],[R[8]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[3],E,E,3,[[[U]],[R[2]]]],[11,"into",E,E,3,[[],[U]]],[11,R[4],E,E,3,[[],[R[2]]]],[11,R[5],E,E,3,[[["self"]],[T]]],[11,R[6],E,E,3,[[["self"]],[T]]],[11,R[7],E,E,3,[[["self"]],[R[8]]]],[11,R[18],E,E,0,[[[R[19]]],[["error"],[R[2],["error"]]]]],[11,R[18],E,E,1,[[[R[19]]],[["error"],[R[2],["error"]]]]],[11,R[18],E,E,2,[[[R[19]]],[["error"],[R[2],["error"]]]]],[11,R[18],E,E,3,[[[R[19]]],[[R[2],["error"]],["error"]]]],[11,R[20],E,E,0,[[["self"],["sink"]]]],[11,R[20],E,E,1,[[["self"],["sink"]]]],[11,R[20],E,E,2,[[["self"],["sink"]]]],[11,R[20],E,E,3,[[["sink"],["self"]]]]],"p":[[3,R[21]],[3,R[22]],[3,R[23]],[3,"Balance"]]};
searchIndex["marketplace"]={"doc":"marketplace contract","i":[[5,"set_dtoken_contract","marketplace","set dtoken contract address as the default dtoken contract…",N,[[[R[14]]],["bool"]]],[5,"init",E,"init contract set dtoken and split contract address",N,[[[R[14]]],["bool"]]],[5,"get_dtoken_contract",E,"query the default dtoken contract address",N,[[],[R[14]]]],[5,"set_split_policy_contract",E,"set split contract address as the default split contract…",N,[[[R[14]]],["bool"]]],[5,"dtoken_seller_publish",E,"seller publish product, need seller signature",N,[[],["bool"]]],[5,"dtoken_seller_publish_inner",E,E,N,[[["bool"]],["bool"]]],[5,"update",E,E,N,[[],["bool"]]],[5,"delete",E,E,N,[[],["bool"]]],[5,"get_seller_item_info",E,E,N,[[],[["vec",["u8"]],["u8"]]]],[5,"buy_dtoken_from_reseller",E,"buy dtoken from reseller",N,[[["u128"],[R[14]]],["bool"]]],[5,"buy_dtokens",E,"Buy more than one dtoken at a time",N,[[["vec",["u128"]],["vec",["vec"]],["u128"],["vec",["u8"]],[R[14]]],["bool"]]],[5,"buy_dtoken",E,"buy dtoken",N,[[["u128"],[R[14]]],["bool"]]],[5,R[26],E,R[26],N,[[["u128"],[R[14]]],["bool"]]],[5,R[27],E,E,N,[[]]]],"p":[]};
searchIndex["open_kg"]={"doc":E,"i":[[5,"buy_use_token","open_kg",E,N,[[["u128"],[R[14]]],["bool"]]],[5,"buy_reward_and_use_token",E,E,N,[[["u128"],[R[14]]],["bool"]]]],"p":[]};
searchIndex["split_policy"]={"doc":E,"i":[[3,"AddrAmt","split_policy",E,N,N],[3,R[25],E,E,N,N],[5,"register",E,"register the dividend distribution strategy on the chain",N,[[],["bool"]]],[5,"get_register_param",E,"query RegisterParam by key",N,[[],["registerparam"]]],[5,R[24],E,E,N,[[[R[14]],["u128"]],["bool"]]],[5,"get_balance",E,E,N,[[],["u128"]]],[5,"withdraw",E,"the data owner withdraw token from the contract",N,[[[R[14]]],["bool"]]],[5,"transfer_withdraw",E,E,N,[[[R[14]],["u128"]],["bool"]]],[5,R[27],E,E,N,[[]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[3],E,E,0,[[[U]],[R[2]]]],[11,"into",E,E,0,[[],[U]]],[11,R[4],E,E,0,[[],[R[2]]]],[11,R[5],E,E,0,[[["self"]],[T]]],[11,R[6],E,E,0,[[["self"]],[T]]],[11,R[7],E,E,0,[[["self"]],[R[8]]]],[11,R[9],E,E,0,[[["self"]],[T]]],[11,R[10],E,E,0,[[["self"],[T]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[3],E,E,1,[[[U]],[R[2]]]],[11,"into",E,E,1,[[],[U]]],[11,R[4],E,E,1,[[],[R[2]]]],[11,R[5],E,E,1,[[["self"]],[T]]],[11,R[6],E,E,1,[[["self"]],[T]]],[11,R[7],E,E,1,[[["self"]],[R[8]]]],[11,"clone",E,E,0,[[["self"]],["addramt"]]],[11,R[18],E,E,0,[[[R[19]]],[["error"],[R[2],["error"]]]]],[11,R[18],E,E,1,[[[R[19]]],[["error"],[R[2],["error"]]]]],[11,R[20],E,E,0,[[["self"],["sink"]]]],[11,R[20],E,E,1,[[["self"],["sink"]]]]],"p":[[3,"AddrAmt"],[3,R[25]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);