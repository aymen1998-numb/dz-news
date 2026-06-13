import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Retrieve title and category
    const title = searchParams.get('title') || 'DZ Insights | Market Intelligence';
    const category = searchParams.get('category') || 'MARKET REPORT';
    
    // Capitalize category
    const displayCategory = category.toUpperCase();

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: '#09090b',
            backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(212, 163, 89, 0.05) 0%, transparent 50%)',
            padding: '80px',
            boxSizing: 'border-box',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {/* Top Logo / Brand Info */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            {/* Logo Mark - elegant mini gold triangle */}
            <div
              style={{
                width: '16px',
                height: '16px',
                backgroundColor: '#d4a359',
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              }}
            />
            <span
              style={{
                fontSize: '14px',
                fontWeight: 'bold',
                letterSpacing: '0.15em',
                color: '#d4a359',
              }}
            >
              DZ INSIGHTS
            </span>
            <span
              style={{
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '0.15em',
                color: '#52525b',
              }}
            >
              | MARKET INTELLIGENCE
            </span>
          </div>

          {/* Main Title text */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '950px',
              margin: 'auto 0',
            }}
          >
            <span
              style={{
                fontSize: '12px',
                fontWeight: 'bold',
                letterSpacing: '0.2em',
                color: '#10b981',
                textTransform: 'uppercase',
              }}
            >
              {displayCategory}
            </span>
            <h1
              style={{
                fontSize: '54px',
                fontWeight: '800',
                color: '#ffffff',
                lineHeight: '1.25',
                margin: 0,
                padding: 0,
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </h1>
          </div>

          {/* Footer details */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              borderTop: '1px solid #1f2937',
              paddingTop: '24px',
            }}
          >
            <span
              style={{
                fontSize: '14px',
                color: '#71717a',
                fontWeight: '500',
              }}
            >
              dzanalytica.com
            </span>
            <span
              style={{
                fontSize: '14px',
                color: '#52525b',
              }}
            >
              Weekly Special Report
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
