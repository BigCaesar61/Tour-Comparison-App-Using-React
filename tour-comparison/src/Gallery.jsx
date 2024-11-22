import React, { useState, useEffect } from 'react';

 const [tours, setTours] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(false);