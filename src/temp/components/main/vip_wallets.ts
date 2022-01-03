const vipWallets: Record<string, boolean> = {
  AooCpvqRS3tb551kEdzsRD2zD3fRXLcwKVVFkvimqRpL: true,
};

export function isVIPWallet(walletId?: string) {
  if (!walletId) {
    return undefined;
  }

  return vipWallets[walletId] || false;
}
