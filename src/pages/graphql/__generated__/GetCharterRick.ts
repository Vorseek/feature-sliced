/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCharterRick
// ====================================================

export interface GetCharterRick_characters_info {
  __typename: "Info";
  /**
   * The length of the response.
   */
  count: number | null;
}

export interface GetCharterRick_characters_results {
  __typename: "Character";
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * The name of the character.
   */
  name: string | null;
  /**
   * The status of the character ('Alive', 'Dead' or 'unknown').
   */
  status: string | null;
}

export interface GetCharterRick_characters {
  __typename: "Characters";
  info: GetCharterRick_characters_info | null;
  results: (GetCharterRick_characters_results | null)[] | null;
}

export interface GetCharterRick {
  /**
   * Get the list of all characters
   */
  characters: GetCharterRick_characters | null;
}
