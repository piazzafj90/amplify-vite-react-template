// src/amplifyConfig.js
import { Amplify } from 'aws-amplify';
// If amplify_outputs.json is in your project root (default for Amplify Gen 2)
import outputs from '../amplify_outputs.json';

Amplify.configure(outputs);
