import React, { useEffect } from 'react';
import { useAuthContext } from 'context/auth'

const ResolveAuth = () => {
  const{ checkLocalAuth } = useAuthContext()
  useEffect(() => {checkLocalAuth()}, [])

  return null
};

export default ResolveAuth;