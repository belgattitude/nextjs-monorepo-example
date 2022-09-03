
import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace CatFactsTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
};

export type Query = {
  /** Returns a a list of breeds */
  getBreeds?: Maybe<Array<Maybe<Breed_model>>>;
  /** Returns a random fact */
  getRandomFact?: Maybe<CatFact_model>;
  /** Returns a a list of facts */
  getFacts?: Maybe<Array<Maybe<CatFact_model>>>;
};


export type QuerygetBreedsArgs = {
  limit?: InputMaybe<Scalars['BigInt']>;
};


export type QuerygetRandomFactArgs = {
  max_length?: InputMaybe<Scalars['BigInt']>;
};


export type QuerygetFactsArgs = {
  max_length?: InputMaybe<Scalars['BigInt']>;
  limit?: InputMaybe<Scalars['BigInt']>;
};

/** Breed */
export type Breed_model = {
  /** Breed */
  breed?: Maybe<Scalars['String']>;
  /** Country */
  country?: Maybe<Scalars['String']>;
  /** Origin */
  origin?: Maybe<Scalars['String']>;
  /** Coat */
  coat?: Maybe<Scalars['String']>;
  /** Pattern */
  pattern?: Maybe<Scalars['String']>;
};

/** CatFact */
export type CatFact_model = {
  /** Fact */
  fact?: Maybe<Scalars['String']>;
  /** Length */
  length?: Maybe<Scalars['Int']>;
};

}
export type QueryCatFactsSdk = {
  /** Returns a a list of breeds **/
  getBreeds: InContextSdkMethod<CatFactsTypes.Query['getBreeds'], CatFactsTypes.QuerygetBreedsArgs, MeshContext>,
  /** Returns a random fact **/
  getRandomFact: InContextSdkMethod<CatFactsTypes.Query['getRandomFact'], CatFactsTypes.QuerygetRandomFactArgs, MeshContext>,
  /** Returns a a list of facts **/
  getFacts: InContextSdkMethod<CatFactsTypes.Query['getFacts'], CatFactsTypes.QuerygetFactsArgs, MeshContext>
};

export type MutationCatFactsSdk = {

};

export type SubscriptionCatFactsSdk = {

};
export type CatFactsContext = {
      ["CatFacts"]: { Query: QueryCatFactsSdk, Mutation: MutationCatFactsSdk, Subscription: SubscriptionCatFactsSdk },
      
    };