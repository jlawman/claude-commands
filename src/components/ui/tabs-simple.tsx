"use client";

import React from 'react';

export const Tabs = ({ children, value, onValueChange, className }) => (
  <div className={className}>{children}</div>
);

export const TabsList = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const TabsTrigger = ({ children, value, className }) => (
  <button className={className}>{children}</button>
); 