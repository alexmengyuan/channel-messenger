import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {GraphQLError, GraphQLFormattedError} from 'graphql';
import {ChannelModule} from "./Channel/channel.module";
import {MessageModule} from "./Message/message.module";
import {CommonModule} from "./Common/common.module";

@Module({
    imports: [
        CommonModule,
        ChannelModule,
        MessageModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            debug: false,
            formatError: (error: GraphQLError) => {
                const graphQLFormattedError: GraphQLFormattedError = {
                    message: error?.message || error?.extensions?.exception?.stacktrace?.[0] ,
                };
                return graphQLFormattedError;
            },
            installSubscriptionHandlers: true,
        }),
    ],
})
export class AppModule {}