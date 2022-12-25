技术栈:  

项目通过 nestjs 提供 ioc  
集成了 apollo 提供 graphql  
集成了 express 提供 http 服务  
集成了 prisma 提供 database orm  
集成了 jest 提供 单元测试
通过 Docker两阶段构建 容器化部署

项目结构：  
|-- .env  // 环境变量，数据库链接等  
|-- db.sql // 数据库创建文件 
|-- integration-test.md //集成测试文档，graphql 测试用例
|-- Dockerfile // docker文件，本地测试过构建和部署  
|-- Readme.md  
|-- package.json  
|-- tsconfig.json  
|-- yarn.lock  
|-- prisma  
|   |-- schema.prisma // prisma 数据库描述文件  
|-- src  
|-- app.module.ts  // 在根模块全局处理了Error信息  
|-- main.ts  
|-- Channel // channel 模块  
|   |-- channel.module.ts  
|   |-- channel.resolver.ts  // graphql resolver  
|   |-- channel.service.spec.ts // channel 服务的单元测试  
|   |-- channel.service.ts  // 服务  
|   |-- dto  
|   |   |-- new-channel.input.ts  
|   |-- models  
|       |-- channel.model.ts  
|-- Common  
|   |-- common.module.ts  
|   |-- Db  
|   |   |-- db.service.ts  
|   |-- Scalars  
|       |-- date.scalar.ts  
|-- Constants  
|   |-- ErrorMsg.ts  // 常用报错信息  
|-- Message // Message 模块  
|   |-- message.module.ts  
|   |-- message.resolve.ts  
|   |-- message.service.spec.ts  // message 服务的单元测试  
|   |-- message.service.ts  
|   |-- dto  
|   |   |-- message-list.args.ts  
|   |   |-- new-message.input.ts  
|   |-- models  
|       |-- message.model.ts  
|-- Traits  
|-- MiscHelper.ts // 对数据库操作的报错处理进行了封装


