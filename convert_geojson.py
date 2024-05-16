import pandas as pd
import geojson

# Read the CSV file into a DataFrame
df = pd.read_csv('g_data.csv')

# Convert coordinates to a list of floats
df['coordinates'] = df['coordinates'].apply(lambda x: [float(i.strip()) for i in x.split(',')])

# Create a list to hold features
features = []

# Iterate over rows and create features
for index, row in df.iterrows():
    feature = {
        "type": "Feature",
        "properties": {
            "Neighborhood": row['Neighborhood'],
            "datetime": row['datetime'],
            "Radius (ft)": row['Radius: (ft)'],
            "Photo": {
                "Faceless": row['Photo: Faceless'],
                "Shirtless": row['Photo: Shirtless']
            },
            "Age": {
                "(x̅)": row['Age: (x̅)'],
                "(M)": row['Age: (M)']
            },
            "Race": {
                "White": row['Race: White'],
                "Black": row['Race: Black'],
                "Latino": row['Race: Latino'],
                "Asian": row['Race: Asian'],
                "Mixed": row['Race: Mixed'],
                "Middle Eastern": row['Race: Middle Eastern'],
                "South Asian": row['Race: South Asian'],
                "Other": row['Race: Other'],
                "N/A": row['Race: N/A']
            },
            "Gender": {
                "Man": row['Gender: Man'],
                "Cis Man": row['Gender: Cis Man'],
                "Gender Non-Binary": row['Gender Non-Binary'],
                "Trans Wmn": row['Gender: Trans Wmn'],
                "Queer": row['Gender: Queer'],
                "N/A": row['Gender: N/A']
            },
            "Position": {
                "Top": row['Position: Top'],
                "Vers Top": row['Position: Vers Top'],
                "Vers": row['Position: Vers'],
                "Vers Bottom": row['Position: Vers Bottom'],
                "Bottom": row['Position: Bottom'],
                "N/A": row['Position: N/A']
            },
            "Relationship Stat": {
                "Single": row['Relationship Stat: Single'],
                "Open Relationship": row['Relationship Stat: Open Relationship'],
                "Married": row['Relationship Stat: Married'],
                "Partnered": row['Relationship Stat: Partnered'],
                "Dating": row['Relationship Stat: Dating'],
                "N/A": row['Relationship Stat: N/A']
            },
            "Looking for": {
                "Right Now": row['Looking for: Right Now'],
                "Friends": row['Looking for: Friends'],
                "Chat": row['Looking for: Chat'],
                "Dates": row['Looking for: Dates'],
                "Relationship": row['Looking for: Relationship'],
                "Networking": row['Looking for: Networking']
            },
            "HIV Stat": {
                "Negative": row['HIV Stat: Negative'],
                "Negative on PrEP": row['HIV Stat: Negative on PrEP'],
                "Positive Undetectable": row['HIV Stat: Positive Undetectable'],
                "Positive": row['HIV Stat: Positive'],
                "N/A": row['HIV Stat: N/A']
            }
        },
        "geometry": {
            "type": "Point",
            "coordinates": row['coordinates']
        }
    }
    features.append(feature)

# Create a FeatureCollection
feature_collection = {"type": "FeatureCollection", "features": features}

# Write GeoJSON to a file
with open('output.geojson', 'w') as f:
    geojson.dump(feature_collection, f)
