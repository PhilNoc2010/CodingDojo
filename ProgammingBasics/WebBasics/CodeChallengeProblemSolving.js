/* A program needs to be able to decipher between first, second, third person writing in a given paragraph.  An educated
guess can be made by the computer based on the type of pronouns used in the paragraph.  If words like "I", "me", or "we" are
used more often than others, this can be read as an indication of first person writing
*/

/** Pseudo Code
 * read paragraph into an array facilitate looking at each word
 *
 * wordarray [] = paragraph
 *
 * for each word in wordarray
 * if a pronoun,
 *  if first person pronoun, increase count of first person bucket
 *  if second person pronoun, increase count of second person bucket
 *  if third person pronoun, incease count of third person bucket
 * if not a pronoun, skip
 * get next word and repeat
 *
 * When all words in the paragraph have been examined, determine which bucket is the highest count to make an educated guess
 * if multiple buckets have the same value, favor them in this order, based on likelyhood:
 *  3rd person,
 *  ist person,
 *  2nd person
 *
 * if all buckets are empty, notify the user that a determination could not be made due to insufficient data
 *
 * Special care will likely be required to handle words that occur as part of dialog, as this can throw off the algorithm
 * described above
 *
 */

/**
 * The challenging part of solving this problem will be coming with a method that has a sufficient level of accuracy,
 * since the english language can be challenging to parse out, even for native speakers.  Fighting the tempatiuon to
 * find a solution that will be 100% accurate will be strong but impossible.  Perfection will definitely stand in the
 * way or progress.  In times like this, I like to focus on
 * solution that will solve 80% of common cases and then come up with a plan that will handle the edge cases that inevitably
 * rise up
 */

