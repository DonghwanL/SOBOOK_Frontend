interface DeviceProps {
  [key: string]: number
}

const deviceSize: DeviceProps = {
  mobile: 420,
  tablet: 800,
  laptop: 1600,
  desktop: 2560,
}

export const device = {
  mobile: `(max-width: ${deviceSize.mobile}px)`,
  tablet: `(max-width: ${deviceSize.tablet}px)`,
  laptop: `(max-width: ${deviceSize.laptop}px)`,
  desktop: `(max-width: ${deviceSize.desktop}px)`,
}
