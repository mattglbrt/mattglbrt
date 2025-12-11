import satori from 'satori';
import sharp from 'sharp';

export async function generateOgImage(title: string, subtitle?: string): Promise<Buffer> {
  // Use a system font that's commonly available
  // Satori requires font data, so we'll use a basic sans-serif approach
  const fontData = await fetch(
    'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.woff'
  ).then((res) => res.arrayBuffer());

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #134e4a 100%)',
          position: 'relative',
        },
        children: [
          // Decorative circles
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                top: '-100px',
                right: '-100px',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'rgba(59, 130, 246, 0.15)',
              },
            },
          },
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: '-150px',
                left: '-100px',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: 'rgba(19, 78, 74, 0.2)',
              },
            },
          },
          // Content container
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '60px',
                maxWidth: '1000px',
                textAlign: 'center',
              },
              children: [
                // Title
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: title.length > 50 ? '48px' : '64px',
                      fontWeight: 700,
                      color: 'white',
                      lineHeight: 1.2,
                      marginBottom: '24px',
                      textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    },
                    children: title,
                  },
                },
                // Subtitle
                subtitle && {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '28px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginBottom: '32px',
                    },
                    children: subtitle,
                  },
                },
                // Author/site name
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      marginTop: '32px',
                    },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '24px',
                            fontWeight: 700,
                          },
                          children: 'M',
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: '24px',
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontWeight: 600,
                          },
                          children: 'Matt Gilbert',
                        },
                      },
                    ],
                  },
                },
              ].filter(Boolean),
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return png;
}
