graphql playground 测试数据 

create channel  

    mutation addChannel($name:String!){  
        addChannel(newChannelData:{name:$name}){  
           id  
        }  
    }  

query variable:

    {"name": "channel name1"}

create message

    mutation addMessage($title:String!,$content:String!,$cid:Float!){
      addMessage(newMessageData:{title:$title,content:$content,cid:$cid}){
         id
      }
    }

query variable:

    {"title":"msg1","content": "msgcontent1","cid": 1} 

get message list

    query getMessageList($page:Int!,$pageSize:Int!,$cid:Int!){
        getMessageList(page:$page,pageSize:$pageSize,channel:$cid){
            title,
            content,
            id
        }
    }

query variable:

    {"page": 1,"pageSize": 10,"cid": 1}