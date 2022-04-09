import { connect } from '../../utils/database'; // Import the database connection
import { NextApiRequest, NextApiResponse } from 'next';

/**
 * 
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 
 */

export default async function handler(req, res) {
  res.status(200).send(users);
}